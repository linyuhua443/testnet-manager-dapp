'use client';

import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    name: '',
    testnetLink: '',
    faucetLink: '',
    notes: ''
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const addProject = () => {
    if (!project.name.trim()) return;
    setProjects([...projects, project]);
    setProject({ name: '', testnetLink: '', faucetLink: '', notes: '' });
  };

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">🧪 Testnet Manager DApp</h1>

      <Card className="p-4 mb-6">
        <Input
          name="name"
          placeholder="Project Name"
          value={project.name}
          onChange={handleChange}
          className="mb-2"
        />
        <Input
          name="testnetLink"
          placeholder="Testnet Link"
          value={project.testnetLink}
          onChange={handleChange}
          className="mb-2"
        />
        <Input
          name="faucetLink"
          placeholder="Faucet Link"
          value={project.faucetLink}
          onChange={handleChange}
          className="mb-2"
        />
        <Textarea
          name="notes"
          placeholder="Your notes here..."
          value={project.notes}
          onChange={handleChange}
          className="mb-2"
        />
        <Button onClick={addProject}>➕ Add Project</Button>
      </Card>

      {projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects added yet.</p>
      ) : (
        projects.map((proj, idx) => (
          <Card key={idx} className="p-4 mb-4">
            <h2 className="text-xl font-semibold mb-1">{proj.name}</h2>
            <p><strong>Testnet:</strong> <a href={proj.testnetLink} className="text-blue-600 underline" target="_blank">{proj.testnetLink}</a></p>
            <p><strong>Faucet:</strong> <a href={proj.faucetLink} className="text-blue-600 underline" target="_blank">{proj.faucetLink}</a></p>
            <p className="mt-2 text-sm text-gray-700 whitespace-pre-wrap">{proj.notes}</p>
          </Card>
        ))
      )}
    </main>
  );
}
