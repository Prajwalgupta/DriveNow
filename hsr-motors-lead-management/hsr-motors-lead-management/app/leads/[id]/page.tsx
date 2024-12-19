"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const lead = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  phone: "123-456-7890",
  source: "Website",
  status: "New",
  createdAt: "2023-05-01",
  notes: "Interested in SUV models",
}

export default function LeadDetails() {
  const [editMode, setEditMode] = useState(false)
  const [leadData, setLeadData] = useState(lead)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setLeadData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setLeadData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the updated data to your backend
    console.log("Updated lead data:", leadData)
    setEditMode(false)
  }

  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lead Details</h1>
          <Button onClick={() => setEditMode(!editMode)}>
            {editMode ? "Cancel" : "Edit"}
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={leadData.name}
                onChange={handleInputChange}
                readOnly={!editMode}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={leadData.email}
                onChange={handleInputChange}
                readOnly={!editMode}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={leadData.phone}
                onChange={handleInputChange}
                readOnly={!editMode}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="source">Source</Label>
              {editMode ? (
                <Select
                  name="source"
                  value={leadData.source}
                  onValueChange={(value) => handleSelectChange("source", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Website">Website</SelectItem>
                    <SelectItem value="Facebook">Facebook</SelectItem>
                    <SelectItem value="Twitter">Twitter</SelectItem>
                    <SelectItem value="Google">Google</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <Input id="source" value={leadData.source} readOnly />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              {editMode ? (
                <Select
                  name="status"
                  value={leadData.status}
                  onValueChange={(value) => handleSelectChange("status", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Contacted">Contacted</SelectItem>
                    <SelectItem value="Qualified">Qualified</SelectItem>
                    <SelectItem value="Lost">Lost</SelectItem>
                    <SelectItem value="Closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <Input id="status" value={leadData.status} readOnly />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="createdAt">Created At</Label>
              <Input id="createdAt" value={leadData.createdAt} readOnly />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              name="notes"
              value={leadData.notes}
              onChange={handleInputChange}
              readOnly={!editMode}
              rows={4}
            />
          </div>
          {editMode && (
            <Button type="submit">Save Changes</Button>
          )}
        </form>
      </div>
    </Layout>
  )
}

