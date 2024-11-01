'use client'

import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { MotionCard } from '@/app/components/ui/motion-card'
import { MotionButton } from '@/app/components/ui/motion-button'

const steps = ['Selfie', 'Entrada', 'DNI']

export default function KYC() {
  const [currentStep, setCurrentStep] = useState(0)
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    selfie: null,
    entrada: null,
    dni: null,
  })

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    onDrop: (acceptedFiles) => {
      setFiles(prev => ({ ...prev, [steps[currentStep].toLowerCase()]: acceptedFiles[0] }))
    }
  })

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      console.log('Archivos para KYC:', files)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <MotionCard>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Verificación de Identidad
        </h2>
        <div className="mb-8">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`w-1/3 text-center ${
                  index <= currentStep ? 'text-purple-600' : 'text-gray-400'
                }`}
              >
                <div
                  className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                    index <= currentStep ? 'bg-purple-600 text-white' : 'bg-gray-200'
                  }`}
                >
                  {index + 1}
                </div>
                <div className="mt-2 text-sm">{step}</div>
              </div>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer">
              <input {...getInputProps()} />
              {files[steps[currentStep].toLowerCase()] ? (
                <Image
                  src={URL.createObjectURL(files[steps[currentStep].toLowerCase()] as File)}
                  alt={`Imagen de ${steps[currentStep]}`}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              ) : (
                <p>Arrastra y suelta o haz clic para subir tu {steps[currentStep]}</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
        <MotionButton
          onClick={handleNext}
          gradient="from-purple-600 to-pink-600"
          className="mt-8 w-full"
        >
          {currentStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
        </MotionButton>
      </MotionCard>
    </div>
  )
}