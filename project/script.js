async function loadPyodideAndPredict() {
  let pyodide = await loadPyodide();
  await pyodide.loadPackage("scikit-learn");
  return pyodide;
}

let pyodidePromise = loadPyodideAndPredict();

async function predict() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let shoe = document.getElementById("shoeSize").value; // ✅ corrected this line
  let resultDiv = document.getElementById("result");

  if (!height || !weight || !shoe) {
    resultDiv.innerHTML = "Please fill in all fields.";
    return;
  }

  let pyodide = await pyodidePromise;

  let response = await fetch("class.py");
  let pythonCode = await response.text();

  pythonCode = pythonCode
    .replace("{{height}}", height)
    .replace("{{weight}}", weight)
    .replace("{{shoe}}", shoe);

  try {
    console.log("Running Python code:", pythonCode);
    let prediction = await pyodide.runPythonAsync(pythonCode);
    resultDiv.innerHTML = `Predicted Gender: ${prediction}`;
  } catch (error) {
    resultDiv.innerHTML = `Error: ${error.message}`;
  }
}
