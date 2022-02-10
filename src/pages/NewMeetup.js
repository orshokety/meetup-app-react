import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupFrom";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupFandler(meetupData) {
    fetch(
      "https://react-getting-started-85a7b-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupFandler} />
    </section>
  );
}
export default NewMeetupPage;
