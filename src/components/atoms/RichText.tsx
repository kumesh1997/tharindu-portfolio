type Segment = { text: string; emphasis?: boolean };

export default function RichText({ segments }: { segments: Segment[] }) {
  return <>{segments.map((segment, index) => segment.emphasis
    ? <strong key={index}>{segment.text}</strong>
    : <span key={index}>{segment.text}</span>)}</>;
}
