export default function Footer() {
  return (
    <div className="mt-8 md:order-1 md:mt-0">
      <p className="text-center text-xs leading-5 text-muted-foreground">
        &copy; {new Date().getFullYear()} Kyaw Wunna Maung. All rights reserved.
      </p>
    </div>
  );
}
