// utils/getDriveImages.js
export async function getDriveImages(folderId, apiKey) {
  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name)&key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.files.map(
    (file) => `https://drive.google.com/uc?export=view&id=${file.id}`
  );
}
