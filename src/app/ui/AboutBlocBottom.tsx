import TextSimple from "@/app/ui/TextSimple";

export default function AboutBlocBottom() {
  return (
    <div className="max-w-[1280px] m-auto pt-12 text-center text-xs">
      <TextSimple>
        <strong className="inline-block pb-1">
          Thank you for your visit !
        </strong>
      </TextSimple>
      <br />
      <TextSimple>
        Please note that this app was developed solely for experimental purposes
        and is not intended for commercial use.
        <br /> As such, some features may not be maintained over time.
        <br /> I work on this project sporadically, without a commitment to its
        long-term maintenance.
      </TextSimple>
      <br />
      <TextSimple>
        Rest assured, we do not collect, store, or share any personal data
        through this app.
        <br /> User privacy is of utmost importance to us.
      </TextSimple>
      <br />
      <TextSimple>
        We hope you enjoy using this app and discovering new movies.
        <br /> Feel free to share your feedback and suggestions with me (find my
        social media links below),
        <br /> they&#39;ll help me to improve the xperience.
      </TextSimple>
      <br />
      <TextSimple>
        Thank you for your understanding and interest in our project!
      </TextSimple>
      <br />
      <br />
      <TextSimple>@valentinafso</TextSimple>
    </div>
  );
}
