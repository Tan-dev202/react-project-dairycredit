export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white">
      <div className="container text-center">
        &copy; {currentYear} DairyCredit | All Rights Reserved
      </div>
    </footer>
  );
}
