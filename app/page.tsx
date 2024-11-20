"use client";

import { useState } from "react";
import { Search, Copy, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { snippets } from "./data";

export default function Component() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [searchResults, setSearchResults] = useState<typeof snippets>([]);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = snippets.filter(
      (snippet) =>
        snippet.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        snippet.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };
  const copyToClipboard = async (text: string, id: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      toast({
        title: "Copied to clipboard",
        description: "The snippet has been copied to your clipboard.",
      });
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast({
        title: "Failed to copy",
        description:
          "There was an error copying the snippet to your clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start p-4 bg-cover bg-center bg-[#0C0C0C]"
      style={{
        backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
      }}
    >
      <div className="bg-[#0C0C0C] bg-opacity-80 p-8 rounded-lg w-full max-w-2xl border border-[#00FF00] mb-8">
        <h1 className="text-4xl font-bold mb-6 text-[#00FF00] text-center font-mono">
          PenTest Snippet Search
        </h1>
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex">
            <Input
              type="text"
              placeholder="Search for snippets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow font-mono bg-[#1C1C1C] text-[#00FF00] border-[#00FF00] placeholder-[#00FF00] placeholder-opacity-50"
            />
            <Button
              type="submit"
              className="ml-2 bg-[#1C1C1C] text-[#00FF00] border border-[#00FF00] hover:bg-[#2C2C2C]"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <div className="flex justify-between space-x-2">
            {["all", "code", "context"].map((filterOption) => (
              <Button
                key={filterOption}
                variant="outline"
                onClick={() => setFilter(filterOption)}
                className={`flex-1 font-mono border-[#00FF00] ${
                  filter === filterOption
                    ? "bg-[#00FF00] text-[#0C0C0C]"
                    : "bg-[#1C1C1C] text-[#00FF00] hover:bg-[#2C2C2C]"
                }`}
              >
                {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              </Button>
            ))}
          </div>
        </form>
      </div>

      {searchResults.length > 0 && (
        <div className="bg-[#0C0C0C] bg-opacity-80 p-8 rounded-lg w-full max-w-2xl border border-[#00FF00]">
          {searchResults.map((snippet) => (
            <div key={snippet.id} className="mb-6 last:mb-0">
              <h2 className="text-2xl font-bold text-[#00FF00] mb-2 font-mono">
                {snippet.term}
              </h2>
              <p className="text-[#00FF00] mb-2 font-mono">
                {snippet.description}
              </p>
              <div className="bg-[#1C1C1C] p-4 rounded relative">
                <code className="text-[#00FF00] font-mono">
                  {snippet.codeSnippet}
                </code>
                <Button
                  className="absolute top-2 right-2 bg-[#2C2C2C] text-[#00FF00] hover:bg-[#3C3C3C]"
                  size="sm"
                  onClick={() =>
                    copyToClipboard(snippet.codeSnippet, snippet.id)
                  }
                >
                  {copiedId === snippet.id ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <h3 className="text-xl font-bold text-[#00FF00] mt-4 mb-2 font-mono">
                Examples:
              </h3>
              <ul className="list-disc list-inside">
                {snippet.examples.map((example, index) => (
                  <li key={index} className="text-[#00FF00] font-mono">
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
