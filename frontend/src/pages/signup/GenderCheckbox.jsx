export default function GenderCheckbox({ selectedGender, onCheckboxChange }) {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            checked={selectedGender === "male"}
            type="checkbox"
            className="checkbox border-slate-900"
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }
            `}
        >
          <span className="label-text">Female</span>
          <input
            checked={selectedGender === "female"}
            type="checkbox"
            className="checkbox border-slate-900"
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}

// export default function GenderCheckbox() {
//   return (
//     <div className="flex">
//       <div className="form-control">
//         <label className="label gap-2 cursor-pointer">
//           <span className="label-text">Male</span>
//           <input type="checkbox" className="checkbox border-slate-900" />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className="label gap-2 cursor-pointer">
//           <span className="label-text">Female</span>
//           <input type="checkbox" className="checkbox border-slate-900" />
//         </label>
//       </div>
//     </div>
//   );
// }
