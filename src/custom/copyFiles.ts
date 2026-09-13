// Write an asynchronous function copyFiles(fromDir, targetDir, files)
// that copies a list of specified `files` from a source directory (`fromDir`) to a target directory (`targetDir`).
//
// Requirements:
// - Only copy entries that are actual `files` (ignore subdirectories with matching names).
// - Only copy files present in both fromDir and the files array.
// - Use node:fs/promises
// - Properly catch and handle file system errors.
// - Support Node 20.1.0+
import { copyFile, opendir } from "node:fs/promises";

const files = ["3.js", "4.js", "6.js"];

const copyFiles = async (
  fromDir: string,
  targetDir: string,
  files: string[],
) => {
  try {
    const dir = await opendir(fromDir);
    for await (const dirent of dir) {
      if (dirent.isFile() && files.includes(dirent.name)) {
        await copyFile(
          `${dirent.parentPath}/${dirent.name}`,
          `${targetDir}/${dirent.name}`,
        );
      }
    }
  } catch (error) {
    console.error("Failed to copy files: ", error);
  }
};

// More efficient approche wiht Set

const copyFiles = async (
  fromDir: string,
  targetDir: string,
  files: string[],
) => {
  try {
    const dir = await opendir(fromDir);
    const setFiles = new Set(files);
    for await (const dirent of dir) {
      // match multiple file extensions
      const fileName = dirent.name.split(".").at(0);
      if (dirent.isFile() && setFiles.has(fileName)) {
        // copyFile is a node:fs API function
        await copyFile(
          `${dirent.parentPath}/${dirent.name}`,
          `${targetDir}/${dirent.name}`,
        );
      }
    }
  } catch (error) {
    console.error("Failed to copy files: ", error);
  }
};

copyFiles("./test", "./past", files);
