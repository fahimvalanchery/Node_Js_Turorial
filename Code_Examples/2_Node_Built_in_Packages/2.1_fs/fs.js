const fs = require("fs");

/**
 *
 *
 *
 *
 *
 * Reading a file content
 * For Reading readFile method in fs module is used.
 * readFile have 2 argument first is file path and second is a callback with err and data
 */
const readFromAFile = () => {
  // syntax: readFile(filePath,callBackfn)
  fs.readFile("./docs/blog.txt", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.toString());
    }
  });
};

// readFromAFile()

/**
 * Writing into a File
 * writeFile method is used for creating file with content
 * writeFile have 3 arguments first is filePath, second is content to write, third empty callback
 * it will replace all the existing content,
 * if the file is exist in path itwill use that, otherwise it will create the file with that name
 */
const writeIntoAFile = () => {
  // syntax: writeFile(filePath,contentToWrite,emptyCallBackfn)
  fs.writeFile("./docs/blog_written.txt", "Hello, world", () => {
    console.log("file was written");
  });
};

// writeIntoAFile();

/**
 *
 *
 *
 *
 * Writing into a File
 * appendFile method is used for creating file with content
 * appendFile have 3 arguments first is filePath, second is content to write, third empty callback
 * it will replace all the existing content,
 * if the file is exist in path itwill use that, otherwise it will create the file with that name
 */
const writeIntoAFileWithoutReplace = () => {
  // syntax: appendFile(filePath,contentToWrite,emptyCallBackfn)
  fs.appendFile(
    "./docs/blog_written_without_replace.txt",
    "Hello, world, Dont Replace, \n",
    () => {
      console.log("file was written");
    }
  );
};

// writeIntoAFileWithoutReplace();

/**
 * Check the folder is exist or not
 * existsSync is used for check that folder is exist or not
 */
const isFolderExist = () => {
  //syntax: existsSync(folderPath)
  if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
      if (err) {
        console.log(err);
      }
      console.log("folder created");
    });
  } else {
    console.log("folder Exist");
  }
};

// isFolderExist();

/**
 * Delete Folder
 * If folder exist delete that folder
 */

const deleteFolder = () => {
  // syntax: existsSync(folderpath)
  if (fs.existsSync("./assets")) {
    // syntax: rmdir(folderpath,callback)
    fs.rmdir("./assets", (err) => {
      if (err) {
        console.log(err);
      }
      console.log("folder deleted");
    });
  } else {
    console.log("folder not Exist");
  }
};

// deleteFolder()

/**
 * Delete file
 * If file exist delete that file
 *
 */

const deleteFile = () => {
  // syntax: existsSync(filepath)
  if (fs.existsSync("./docs/blog_written_without_replace.txt")) {
    // syntax: unlink(filepath,callBack)
    fs.unlink("./docs/blog_written_without_replace.txt", (err) => {
      if (err) {
        console.log(err);
      }
      console.log("file deleted");
    });
  } else {
    console.log("file not Exist");
  }
};

// deleteFile();
