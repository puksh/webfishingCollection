export const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("fishImagesDB", 1);

    request.onerror = () => reject("Failed to open IndexedDB");
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("images")) {
        db.createObjectStore("images", { keyPath: "id" });
      }
    };
  });
};

export const saveImage = (id, imageBlob) => {
  return openDB().then((db) => {
    const transaction = db.transaction("images", "readwrite");
    const store = transaction.objectStore("images");
    store.put({ id, imageBlob });

    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject("Error saving image");
    });
  });
};

export const getImage = (id) => {
  return openDB().then((db) => {
    const transaction = db.transaction("images", "readonly");
    const store = transaction.objectStore("images");
    return new Promise((resolve, reject) => {
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject("Error retrieving image");
    });
  });
};
