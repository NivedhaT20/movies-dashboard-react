import "../styles/error-page.css";

interface ErrorPageProps {
  message: string;
}

const ErrorPage = ({ message }: ErrorPageProps) => {
  return (
    <div className="error-container">
      <h1>Oops!</h1>
      <p> {message} </p>
    </div>
  );
};

export default ErrorPage;
