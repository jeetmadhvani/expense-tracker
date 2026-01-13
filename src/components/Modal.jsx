import React, { useState, useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, onAdd }) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const [stepAnim, setStepAnim] = useState("");

  const titleRef = useRef(null);

  const MAX_AMOUNT = 100000000; // 10 crore :)

  // RESET EVERYTHING
  const resetAll = () => {
    setAmount("");
    setTitle("");
    setCategory("");
    setDescription("");
    setDate(new Date().toISOString().split("T")[0]);
    setStep(1);
    setStepAnim("");
    setTitleError(false);
    setCategoryError(false);
  };

  useEffect(() => {
    if (isOpen) {
      setDate(new Date().toISOString().split("T")[0]);
    } else {
      resetAll();
    }
  }, [isOpen]);

  // Show error briefly
  const showTempError = (setter) => {
    setter(true);
    setTimeout(() => setter(false), 1800);
  };

  // Date formatter
  const formatDate = (raw) => {
    const d = new Date(raw);
    const day = d.getDate();
    const suffix =
      day % 10 === 1 && day !== 11 ? "st" :
      day % 10 === 2 && day !== 12 ? "nd" :
      day % 10 === 3 && day !== 13 ? "rd" : "th";

    return `${day}${suffix} ${d.toLocaleString("default", { month: "long" })}, ${d.getFullYear()}`;
  };

  // ALWAYS FORMAT WHILE TYPING
  const handleAmountChange = (value) => {
    let numeric = value.replace(/[^\d]/g, "");

    if (!numeric) {
      setAmount("");
      return;
    }

    // Limit
    if (Number(numeric) > MAX_AMOUNT) numeric = String(MAX_AMOUNT);

    const formatted = Number(numeric).toLocaleString("en-IN");
    setAmount(formatted);
  };

  // NEXT (SLIDE LEFT)
  const goNext = () => {
    const raw = Number(amount.replace(/,/g, ""));
    if (!raw || raw <= 0) return;

    setStepAnim("slide-left");

    setTimeout(() => {
      setStep(2);
      setStepAnim("slide-in");
      setTimeout(() => titleRef.current?.focus(), 80);
    }, 200);
  };

  // BACK (SLIDE RIGHT)
  const goBack = () => {
    setStepAnim("slide-right");

    setTimeout(() => {
      setStep(1);
      setStepAnim("slide-in");
    }, 200);
  };

  // SUBMIT
  const handleSubmit = () => {
    let ok = true;

    if (!title.trim()) {
      showTempError(setTitleError);
      ok = false;
    }
    if (!category.trim()) {
      showTempError(setCategoryError);
      ok = false;
    }

    if (!ok) return;

    onAdd({
      amount: Number(amount.replace(/,/g, "")),
      title,
      category,
      date: formatDate(date),
      description,
    });

    onClose();
    resetAll();
  };

  if (!isOpen) return null;

  const buttonBase =
    "shadow-[0_0_20px_rgba(0,0,0,0.2)] flex justify-center items-center gap-1 py-2 px-4 rounded-2xl font-mono text-white bg-[rgba(var(--theme-color),0.8)] hover:bg-[rgba(var(--theme-color),1)] transition-all duration-200 hover:scale-105 active:scale-95";

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#222] w-[90vw] max-w-sm rounded-2xl p-6 border border-white/10 text-[#eaeaea] font-mono transition-all duration-300">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg">{step === 1 ? "Enter Amount" : "Add Details"}</h1>
          <button onClick={onClose} className="text-gray-300 hover:text-red-400">✕</button>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className={`flex flex-col gap-4 ${stepAnim}`}>

            {/* AMOUNT */}
            <div>
              <label className="text-sm text-gray-400">Amount</label>
              <div className="relative mt-1">

                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-3xl text-gray-300">₹</div>

                <input value={amount} onChange={(e) => handleAmountChange(e.target.value)} placeholder="0" className="w-full p-4 pl-12 pr-4 text-3xl text-right rounded-xl bg-[#1a1a1a] border border-white/10 outline-none focus:border-[rgba(var(--theme-color),0.9)] transition"/>
              </div>
            </div>

            {/* NEXT */}
            <button disabled={!amount} onClick={goNext} className={`${buttonBase} w-full ${!amount ? "opacity-40 cursor-not-allowed" : ""}`}>Next →</button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className={`flex flex-col gap-3 ${stepAnim}`}>

            {/* BACK */}
            <button onClick={goBack} className="text-sm w-fit px-3 py-1.5 rounded-xl bg-[#333] text-white hover:bg-[#444] transition hover:scale-105 active:scale-95">← Back</button>

            {/* AMOUNT BIG */}
            <div className="text-center text-4xl text-[rgba(var(--theme-color),1)]">₹{amount}</div>

            {/* TITLE */}
            <div className={`${titleError ? "animate-shake" : ""}`}>
              <label className="text-sm text-gray-400">Title *</label>
              <input ref={titleRef} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Zomato Order" className="w-full mt-1 p-3 rounded-xl bg-[#1a1a1a] border border-white/10 outline-none"/>
              {titleError && <p className="text-red-400 text-xs">Required</p>}
            </div>

            {/* CATEGORY */}
            <div className={`${categoryError ? "animate-shake" : ""}`}>
              <label className="text-sm text-gray-400">Category *</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full mt-1 p-3 rounded-xl bg-[#1a1a1a] border border-white/10 outline-none">
                <option value="">Category</option>
                <option>Food</option>
                <option>Transport</option>
                <option>Shopping</option>
                <option>Bills</option>
                <option>Other</option>
              </select>
              {categoryError && <p className="text-red-400 text-xs">Required</p>}
            </div>

            {/* DATE */}
            <div>
              <label className="text-sm text-gray-400">Date</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full mt-1 p-3 rounded-xl bg-[#1a1a1a] border border-white/10 outline-none"/>
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="text-sm text-gray-400">Description (optional)</label>
              <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Dinner with friends..." className="w-full mt-1 p-3 rounded-xl bg-[#1a1a1a] border border-white/10 outline-none"/>
            </div>

            <button onClick={handleSubmit} className={`${buttonBase} w-full`}>Add Transaction</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;