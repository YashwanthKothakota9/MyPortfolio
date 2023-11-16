"use client";

//@ts-expect-error
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import { FaPaperPlane } from "react-icons/fa";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-teal-900 text-white rounded-full outline-none transition-all focus:scale-[1.15] hover:scale-[1.15] hover:bg-teal-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-sky-400 dark:bg-opacity-10"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
