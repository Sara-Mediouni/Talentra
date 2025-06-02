"use client";

import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { MoveLeft } from "lucide-react";
import { Fragment, useState} from "react";
type FormData = {
  Title?: string;
  description?: string;
  industry?: string;
  website?: string;
  logo?: string;
  bio?: string;
  cv?: string;
  picture?: string;

};
export default function CompleteProfileModal({ isOpen, onClose, onPrevious,role }: { isOpen: boolean; onClose: () => void, onPrevious: () => void, role: string }) {
  const [form, setForm] = useState<FormData>({
     Title: "",
     description: "",
     industry: "",
     website: "",
     logo: "",
     bio: "",
     cv:"",
     picture:""


      
   });
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    axios.post('http://localhost:3000/cv/upload', file, {
      headers: {
        'Content-Type': file?.type || 'application/pdf',
      },
    })
      .then(response => {
        console.log('File uploaded successfully:', response.data);
        // Handle success response
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        // Handle error response
      });
  }
   const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleUpdateProfile = () => {
    const id= localStorage.getItem("id");
    // Logic to update the profile based on the role
    if (role === "individual") {
      axios.post(`http://localhost:3000/users/update/${id}`, {})
        .then(response => {
          console.log('Profile updated successfully:', response.data);
          // Handle success response
        })
        .catch(error => {
          console.error('Error updating profile:', error);
          // Handle error response
        });
     
    } else if (role === "company") {
        axios.post(`http://localhost:3000/company/update/${id}`, {})
        .then(response => {
          console.log('Profile updated successfully:', response.data);
          // Handle success response
        })
        .catch(error => {
          console.error('Error updating profile:', error);
          // Handle error response
        });
      // Update company profile logic
      
    }
    
  }
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
      <div className="fixed inset-0 bg-black bg-opacity-25" />
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
          <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
            <Dialog.Title className="text-lg font-bold text-gray-900">
              Complete Your Profile
            </Dialog.Title>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleUpdateProfile();
              onClose();
            }}>
            <div className="mt-4 space-y-4">
              {role === "individual" ? (
                <>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-900 mb-1">Title</label>
                    <input
                      name="Title"
                      value={form.Title}
                      onChange={handleChange}
                      type="text"
                      placeholder="e.g. Frontend Developer"
                      className="form-input w-full"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-900 mb-1">Short bio / summary</label>
                    <textarea
                      name="bio"
                      value={form.bio}
                      onChange={handleChange}
                      placeholder="Tell us a bit about yourself..."
                      rows={3}
                      className="form-input w-full resize-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-900 mb-1">CV</label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      name="cv"
                      value={form.cv}
                      onChange={handleFileChange}
                      className="form-input w-full"
                    />
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-900 mb-1">Profile Picture</label>
                    <input
                      type="file"
                      accept="image/*"
                      name="picture"
                      value={form.picture}
                      onChange={handleFileChange}
                      className="form-input w-full"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-900 mb-1">Industry</label>
                    <input
                      type="text"
                      name="industry"
                      onChange={handleChange}
                      value={form.industry}
                      placeholder="e.g. Tech, Healthcare..."
                      className="form-input w-full"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-900 mb-1">Website</label>
                    <input
                      type="text"
                      name="website"
                      onChange={handleChange}
                      value={form.website}
                      placeholder="https://yourcompany.com"
                      className="form-input w-full"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-900 mb-1">Description</label>
                    <textarea
                      placeholder="Tell us about your company..."
                      rows={3}
                      name="description"
                      onChange={handleChange}
                      value={form.description}
                      className="form-input w-full resize-none"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-900 mb-1">Logo</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      placeholder="Upload your company logo"
                      name="logo"
                      value={form.logo}
                      className="form-input w-full"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Footer buttons */}
            <div className="mt-6 flex justify-between">
              <button type="submit"
              className="text-teal-900" onClick={onPrevious}>
                <MoveLeft />
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Save & Continue
              </button>
            </div>
            </form>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  </Dialog>
</Transition>

  );
}
