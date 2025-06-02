import React, { useState } from 'react'
import LoginPopup from './LoginPopup'
import ChoiceSignup from './ChoiceSignup'
import CompleteProfileModal from './CompleteProfileModal';

const SignupComponent = ({ onClose }: { onClose: () => void }) => {
const [showSignupChoice, setShowSignupChoice] = useState(true);
const [showModal, setShowModal] = useState(false);
const [role, setRole] = useState('');
  const [Type, setType] = useState('Signup');
  const togglePopupType = (newType: 'Login' | 'Signup') => {
    setType(newType); // Change le type de popup (Login ou Signup)
  };
  const handleSignupContinue = (selectedRole: string) => {
     setRole(selectedRole); // 👈 tu récupères le rôle ici
    // tu peux maintenant rediriger, afficher un autre modal, etc.
  setShowSignupChoice(false);
  setShowLoginPopup(true);
  
};
const resetSignupFlow = () => {
  setShowSignupChoice(false);
  setShowModal(false);
  setShowLoginPopup(false);
  setRole('');
  setType('Signup');
  onClose(); // Appelle la fonction onClose pour fermer le composant
};
 const handleSignupPrevious = () => {
  setShowSignupChoice(true);
  setShowLoginPopup(false);
}
 const handleCompletePrevious = () => {
  setShowModal(false);
  setShowLoginPopup(true);
}
const handleSignup = () => {
  setShowModal(true);
  setShowLoginPopup(false);
   // Ouvre la modale de complétion du profil
}
const [showLoginPopup, setShowLoginPopup] = useState(false);
  return (
    <>
      <ChoiceSignup
      isOpen={showSignupChoice}
      onContinue={handleSignupContinue}
      onClose={resetSignupFlow}/>
      <LoginPopup
            onPrevious={handleSignupPrevious}
            isOpen={showLoginPopup}
            onClose={resetSignupFlow}
            type={Type}
            toggleType={togglePopupType}
            onContinue={handleSignup}
            role={role}
          />
      <CompleteProfileModal isOpen={showModal} role={role}
      onClose={resetSignupFlow} onPrevious={handleCompletePrevious}/>
      
     
    </>
  )
}

export default SignupComponent