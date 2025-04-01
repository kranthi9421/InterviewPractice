import React,{useState} from 'react';

export const Step = () => {
      const [step, setStep] = useState(1)
    
      const nextStep = () => setStep((prev) => prev + 1)
      const prevStep = () => setStep((prev) => prev - 1)
    return (
      <div>
        {step === 1 && (
          <div>
            <h2>Step 1</h2>

            <button onClick={nextStep}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Step 2</h2>

            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Step 3: Confirm</h2>

            <button onClick={prevStep}>Back</button>
            <button onClick={() => alert("Form Submitted!")}>Submit</button>
          </div>
        )}
      </div>
    )
};

