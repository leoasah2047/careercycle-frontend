import "./JobSelection.css";

function SelectJobPosition(props) {
  return (
    <form onSubmit={props.handleSelectionSubmit}>
      <h3 className="font-poppins-bold text-lg text-blue md:mb-4">
        What's the job position you want to train for?
      </h3>
      <div>
        <input
            className="shadow border h-10 md:w-96 w-72 text-md ml-2 pl-2"
            type="text"
            value={props.jobSelection}
            onChange={props.handleSelectionChange}
            placeholder="Lawyer"
          />
        <button
          className="bg-blue text-white text-md py-2 px-4 mb-4 ml-2 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-lblue rounded-xl ease-in-out duration-200 "
          type="submit"
        >
          Start Interview
        </button>
      </div>
    </form>
  );
}

export default SelectJobPosition;
