"use client";

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";


const ChoiceSignup = ({ isOpen, onClose, onContinue }: { isOpen: boolean; onClose: () => void;onContinue: (role:string) => void }) => {
  const [selectedRole, setSelectedRole] = useState('');
 
   const handleContinue = () => {
    onClose();
    onContinue(selectedRole); // Appelle la fonction du parent
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          leave="ease-in duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              leave="ease-in duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-8 text-left shadow-xl transition-all">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
                  aria-label="Close"
                >
                  ×
                </button>

                <Dialog.Title className="text-2xl  font-bold text-center text-gray-900 mb-6">
                  Let’s get started ! <br /> Who are you?
                </Dialog.Title>

                <div className="grid gap-6">
                  <button
                    onClick={() => setSelectedRole('individual')}
                    className={`flex items-center gap-4 px-4 py-4 rounded-lg border transition ${
                      selectedRole === 'individual'
                        ? 'bg-yellow-500 text-white border-yellow-500'
                        : 'bg-white text-gray-800 hover:bg-gray-100 border-gray-300'
                    }`}
                  >
                    <Image src="/Hired-amico.svg" width={180} height={60} alt="Individual" />
                    <div>
                      <h3 className="text-lg font-semibold">I’m a Job Seeker</h3>
                      <p className="text-sm text-gray-600">I’m looking for job opportunities</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedRole('company')}
                    className={`flex items-center gap-4 px-4 py-4 rounded-lg border transition ${
                      selectedRole === 'company'
                        ? 'bg-yellow-500 text-white border-yellow-500'
                        : 'bg-white text-gray-800 hover:bg-gray-100 border-gray-300'
                    }`}
                  >
                    <Image src="/Hiring-cuate.svg" width={180} height={60} alt="Company" />
                    <div>
                      <h3 className="text-lg font-semibold">I’m a Company</h3>
                      <p className="text-sm text-gray-600">I want to hire great talent</p>
                    </div>
                  </button>
                </div>

                <div className="mt-6 text-right">
                  <button
                    disabled={!selectedRole}
                    onClick={handleContinue}
                    className={`px-5 py-2.5 rounded-lg text-white transition ${
                      selectedRole
                        ? 'bg-yellow-500 hover:bg-yellow-600'
                        : 'bg-gray-300 cursor-not-allowed'
                    }`}
                  >
                    Continue
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>

    
    </Transition>
  );
};

export default ChoiceSignup;
