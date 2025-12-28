export default function Partner() {
  return (
    <div className="pb-[80px] md:pb-[96px]">
      <div className="md:md-[48px] mx-auto mb-[32px] max-w-7xl px-4">
        <header className="mb-[24px] md:text-center">
          <span className="mb-[8px] text-[24px] font-[400px] md:mb-[12px] md:text-[32px]">
            <span>Partnered with</span>
            <strong className="font-[700px] text-primary">
              500+ Trusted Universities Worldwide{" "}
            </strong>
          </span>
        </header>
      </div>
      <img src="/partner.png" alt="partner" className="md:w-full" />
    </div>
  );
}
