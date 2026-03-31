import "./Guidelines.scss";
// import SubmitEntries from "./SubmitEntries";

function Guidelines() {
  return (
    <div className="rules">
      <h3 className="underline">Categories:</h3>
      <h4 className="reduce-margin-heading no-indent">Writers:</h4>
      <p>
        <strong>1. Short Story: </strong> 2000-word limit
      </p>
      <p>
        <strong>2. Poem: </strong> 50 lines maximum
      </p>
      <p>
        <strong>3. Irish Farmer Hit (Song Filk):</strong>
        <ul>
          <li>
            Rewrite a song's lyrics as if you are the Irish Farmer Michail
            O'Flaithbheartaigh, on a theme related to farming or Irish life.
          </li>
          <li>4 lines minimum</li>
          <li>You must provide the title and artist of the original song.</li>
          <li>
            OPTIONAL: include a video or audio clip of you or someone performing
            your song!
          </li>
        </ul>
      </p>
      <p>
        <span className="underline">Tip:</span> Give your piece a title that
        will draw in readers!
      </p>
      <h3 className="underline">Timeline:</h3>
      <h4 className="reduce-margin-heading no-indent">Writers:</h4>
      <div style={{ color: "maroon" }}>
        <strong>
          <u>SUBMISSION PERIOD</u>: April 2nd <code>&#8212;</code> May 10,
          11:59PM Irish Time
        </strong>
      </div>
      <h4 className="reduce-margin-heading">Readers/Voters:</h4>
      <u>VOTING PERIOD</u>: May 14 <code>&#8212;</code> May 31, 11:59PM Irish
      Time
      <p>Results will be determined and announced in the first week of June.</p>
      <h3 className="underline">Rules:</h3>
      <ul className="no-indent">
        <li>
          Submit your entry or entries via the Google Form urls by{" "}
          <strong>May 10, 2024 11:59PM Irish Time</strong>.
        </li>
        <li>You may enter in more than one category.</li>
        <li>You can only submit a maximum of 1 entry in each category.</li>
        <li>The entries will be listed in the order they are received.</li>
        <li>
          Do not submit anything that has already been publicly shared elsewhere
          (including but not limited to: works shared on social media; works
          posted on Archive Of Our Own; works that have won or placed in a FlAsH
          Fiction contest and been displayed on the AcademicFAHn website; and
          works that have been part of a FAHnart Challenge).
        </li>
        <li>
          During the voting period, all the entries will be anonymized--the
          authors' names will not be shown.
        </li>
        <li>No smut or explicit sexual content.</li>
        <li>
          No real person fiction. You can write about Foil Arms and Hog and
          their characters, but not about Sean, Conor, and Sean.
        </li>
        <li>
          Your entry must be rated <strong>PG-13 and under</strong>. No R or
          NC-17 content.
        </li>
      </ul>
      <p>
        The hosts reserve the right not to post your submission(s) if we deem it
        violates the above.
      </p>
      <h3 className="underline">Voting:</h3>
      <ul className="no-indent">
        <li>
          Entries will be made available to view on this website starting on May
          14th, 2024.
        </li>
        <li>
          Readers will be asked to rank their 1st, 2nd, and 3rd favourite works
          in each category. Each "1st favourite" vote will earn the author 3
          points; each "2nd favourite" vote will earn the author 2 points; and
          each "3rd favourite" vote will earn the author 1 point.
        </li>
        <li>Please only vote once per category.</li>
        <li>Voting will be open until May 31st, 2024 11:59PM Irish Time.</li>
        <li>
          The points will be tallied to determine the "Crowd Favourite" (first
          place) and the "Also Awesome" (second place) winner in each category.
        </li>
        <li>Results will be announced in the first week of June.</li>
      </ul>
      <h3 className="underline">Prizes:</h3>
      <ul className="no-indent">
        <li>In each category:</li>
        <ul>
          <li>First place title: Crowd Favourite</li>
          <li>Second place title: Also Awesome</li>
        </ul>

        <li>
          The entries of the first- and second-place winners in each category
          will be featured in the FAHn Facebook Group and on Instagram.
        </li>
        <li>
          Possibly another (small) prize for the winners are in the works, but
          don't expect much (if any).
        </li>
        <li>
          After the voting period closes, all authors' names, pennames, and/or
          social media handles will be displayed alongside their entries on this
          website.
        </li>
      </ul>
      <br />
      {/* <SubmitEntries /> */}
    </div>
  );
}

export default Guidelines;
