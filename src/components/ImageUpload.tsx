function ImageUpload() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
      <div className="border border-dashed border-blue-500 rounded-lg p-6 m-auto">
        <img
          src="./upload.png"
          alt="upload placeholder"
          width={128}
          className="mx-auto mb-4"
        />
        <label className="cursor-pointer font-bold text-blue underline inline-block px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
          Upload image here
          <input type="file" hidden />
        </label>
      </div>
    </>
  );
}

export default ImageUpload;
