import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSeachBar from "./GPTSeachBar";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg" />
      </div>
      <GPTSeachBar />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
