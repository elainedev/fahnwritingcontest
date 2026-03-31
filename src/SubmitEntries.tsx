const SUBMISSION_LINKS = [
  {
    type: "Short Story",
    url: "https://forms.gle/S5uknakqPpFCTe2g6",
  },
  {
    type: "Poem",
    url: "https://forms.gle/67rhxNMgzNhX3Ywt7",
  },
  {
    type: "Irish Farmer Hit",
    url: "https://forms.gle/x7tvYeFc16dZkk6k7",
  },
];

function SubmitEntries() {
  return (
    <>
      <h2>Submit Your Entries</h2>
      {SUBMISSION_LINKS.map((category) => (
        <>
          <p>
            Submit your <strong>{category.type}</strong> here:{" "}
            <a href={category.url}>{category.url}</a>
          </p>
        </>
      ))}
    </>
  );
}

export default SubmitEntries;
