import { useEffect, useState } from "react";
import Progress from "./Progress";
const Timer=3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(()=>{
    const timer =setTimeout(()=>{
      console.log("timer")
    onConfirm()},Timer)

    return ()=>{
      console.log("cleared")
      clearTimeout(timer);
    }
  },[onConfirm])
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <Progress timer={Timer}></Progress>
    </div>
  );
}
