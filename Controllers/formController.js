const fleek = require("@fleekhq/fleek-storage-js");
const fs = require("fs");


const apiKey = process.env.FLEEK_API_KEY;
const apiSecret = process.env.FLEEK_API_SECRET;

/**
 * uploads file to Fleek
 * @param {*} data Data to be uploaded to Fleek (can be image or object)
 * @param {*} filename FileName of data to be stored in Fleek
 * @returns Object including Name, Hash, BucketName and Public Url of file in fleek
 */
const uploadToFleek = async (data, filename) => {
  const input = {
    apiKey,
    apiSecret,
    key: `MedBeema/${filename}`,
    data,
  };

  try {
    const result = await fleek.upload(input);
    console.log(result);
    return result;
  } catch (e) {
    console.log("error", e);
  }
};

/**
 * Readies file to be uploaded to Fleek
 * @param {string} filePath Path to the file to be uploaded to Fleek
 * @param {string} fileName File Name of data to be stored in Fleek
 * @returns Object Hash and public Url of file stored in Fleek
 */
const uploadIpfs = async (filePath, fileName) => {
  const file = fs.readFileSync(filePath);
  try {
    const uploadedFile = await uploadToFleek(file, fileName);
    if (uploadedFile) {
      return {
        hash: uploadedFile.hash,
        publicUrl: uploadedFile.publicUrl,
      };
    }
  } catch (e) {
    return false;
  }
};

/**
 *
 * @param {request} req
 * @param {response} res
 */
exports.imageUpload = async (req, res) => {
  console.log(req.file);
  const file = req.file;
  const fileName = file.filename;
  const filePath = `${__dirname}\\..\\${file.path}`;

  const fileHash = await uploadIpfs(filePath, fileName);

  if (fileHash) {
    fs.unlink(filePath, (err) => {
      if (err) console.log(err);
    });

    res.status(200).json({
      success: true,
      message: "Image Added",
      id: fileHash.hash,
      image: fileHash.publicUrl,
    });
  } else {
    res.status(400).json({
      success: false,
    });
  }
};

/**
 *
 * @param {request} req
 * @param {response} res
 */
exports.jsonUpload = async (req, res) => {
  const formData = JSON.stringify(req.body);
  // console.log(formData);
  const fileName = `${req.body.name}-${Date.now()}.json`;

  const fileHash = await uploadToFleek(formData, fileName);
  if (fileHash) {
    res.status(200).json({
      success: true,
      message: "JSON Added",
      id: fileHash.hash,
      image: fileHash.publicUrl,
    });
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
