import {useState, useEffect} from "react";

export default function RandomColor() {

  const [typeofColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  
  function handleCreateRandomHEXColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRGBColor() {
    const r = Math.floor(Math.random() * 256); // math.random generates a random no btw 0 and less than 1
    const g = Math.floor(Math.random() * 256); // x* 256 always 0 to 255.99 
    const b = Math.floor(Math.random() * 256);  // math.floor rounds down so 0 to 255 only
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
  }

  useEffect(() => {
    if (typeofColor === 'hex') {
      handleCreateRandomHEXColor();
    }
    else{
        handleCreateRandomRGBColor();
    }
},[typeofColor]);

  return (
    <div style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: color,                     
    }}>
      
    <button onClick={() => setTypeOfColor("hex")}>Create Hex color</button>

    <button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>
    <button onClick={typeofColor === 'hex'? handleCreateRandomHEXColor : handleCreateRandomRGBColor}>Generate Random Color</button>

    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '60px',
        marginTop: '50px',
        flexDirection: 'column',
        gap: '20px',
    }}>
    <h3>{typeofColor === 'hex' ? 'Hex' : 'RGB'}</h3>
    <h1>{color}</h1>
    </div>
    </div>
  );
}