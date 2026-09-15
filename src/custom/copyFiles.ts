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
import { join } from "node:path";

const ALLOWED_EXTENSIONS = new Set(["jpg", "jpeg", "raw"]);

const files = ["3", "4", "6"];

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
  const setFiles = new Set(files);
  const dir = await opendir(fromDir);
  const matches: string[] = [];

  for await (const dirent of dir) {
    if (!dirent.isFile()) continue;

    const parts = dirent.name.split(".");
    if (parts.length !== 2) continue;

    const [name, ext] = parts;
    if (!setFiles.has(name)) continue;
    if (!ALLOWED_EXTENSIONS.has(ext.toLowerCase())) continue;

    matches.push(dirent.name);
  }

  const results = await Promise.allSettled(
    matches.map((fileName) =>
      copyFile(join(fromDir, fileName), join(targetDir, fileName)),
    ),
  );

  results.forEach((res, i) => {
    if (res.status === "rejected") {
      console.error("Failed to copy file:", matches[i], res.reason);
    }
  });
};
copyFiles("./test", "./past", files);
