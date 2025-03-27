"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Check } from "lucide-react"

export function CarUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)

      // Create preview URL
      const reader = new FileReader()
      reader.onload = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
    } else {
      setFile(null)
      setPreviewUrl(null)
    }
  }

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.")
      return
    }

    setUploading(true)
    setUploadProgress(0)

    // Simulate upload process
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 300)

    // Simulate API call
    setTimeout(() => {
      clearInterval(interval)
      setUploadProgress(100)
      setUploading(false)
      setUploadSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setUploadSuccess(false)
        setFile(null)
        setPreviewUrl(null)
        setUploadProgress(0)
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
      }, 2000)
    }, 3000)
  }

  return (
    <Card className="w-full max-w-md mx-auto my-8" id="upload">
      <CardHeader>
        <CardTitle>Car Image Upload</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="car-image">Select Car Image</Label>
            <Input
              id="car-image"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              disabled={uploading}
            />
          </div>

          {file && <div className="text-sm text-gray-500 dark:text-gray-400">Selected file: {file.name}</div>}

          {previewUrl && (
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Preview:</p>
              <div className="aspect-video rounded-md overflow-hidden">
                <img src={previewUrl || "/placeholder.svg"} alt="Preview" className="object-cover w-full h-full" />
              </div>
            </div>
          )}

          {uploading && (
            <div className="mt-4 space-y-2">
              <div className="text-sm">Uploading... {uploadProgress}%</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleUpload} disabled={uploading || !file || uploadSuccess} className="w-full">
          {uploadSuccess ? (
            <span className="flex items-center">
              <Check className="mr-2 h-4 w-4" />
              Upload Successful
            </span>
          ) : uploading ? (
            <span className="flex items-center">
              <Upload className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </span>
          ) : (
            <span className="flex items-center">
              <Upload className="mr-2 h-4 w-4" />
              Upload Car Image
            </span>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CarUpload

