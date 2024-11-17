// src/components/GuideCard.tsx
interface Guide {
    id: string;
    title: string;
    content: string;
  }
  
  export default function GuideCard({ guide }: { guide: Guide }) {
    return (
      <div className="p-4 border rounded-lg mb-4">
        <h2 className="text-xl font-semibold">{guide.title}</h2>
        <p>{guide.content}</p>
      </div>
    );
  }
  