import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPickerDropdown = () => {
  const [color, setColor] = useState("#FF0000");
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Color Picker Trigger */}
      <button
        className="flex items-center gap-2 p-2 border rounded-md"
        onClick={() => setShowPicker(!showPicker)}
      >
        <span
          className="h-5 w-5 rounded-full border"
          style={{ backgroundColor: color }}
        ></span>
        Pick Color
      </button>

      {/* Color Picker Dropdown */}
      {showPicker && (
        <div className="absolute left-0 mt-2 z-10">
          <SketchPicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPickerDropdown;