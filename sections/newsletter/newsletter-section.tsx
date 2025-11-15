export function NewsletterSection() {
  return (
    <section className="py-fluid-sm md:py-fluid-lg bg-white overflow-x-hidden">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 lg:gap-6">
          {/* Левая часть - слоган */}
          <div className="flex items-center flex-shrink-0 w-full md:w-auto">
            <h2 className="text-[#D7120A] font-extra-condensed uppercase text-fluid-xl sm:text-fluid-2xl md:text-fluid-3xl lg:text-fluid-4xl xl:text-fluid-5xl font-bold leading-tight text-center md:text-left md:whitespace-nowrap">
              Верим в Молдову!
            </h2>
          </div>
          
          {/* Правая часть - звезда с текстом */}
          <div className="flex items-center flex-shrink-0 w-full md:w-auto">
            <div className="bg-[#D7120A] border-2 border-white px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full md:w-auto justify-center md:justify-start" style={{ boxShadow: '0 0 0 2px #D7120A, 0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
              {/* Звезда в обводке */}
              <div className="flex-shrink-0 relative">
                <svg 
                  width="80" 
                  height="80" 
                  viewBox="0 0 887 848" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
                >
                  <g clipPath="url(#clip0_star)">
                    <path d="M0 321.906L275.399 525.773L312.172 513.633L92.5585 351.966L0 321.906Z" fill="white"/>
                    <path d="M443.5 0.0109863L551.535 324.817L443.5 468.547V0.0109863Z" fill="white"/>
                    <path d="M443.5 0L341.096 322.807L363.707 354.68L443.5 97.7069V0Z" fill="white"/>
                    <path d="M887 321.906L615.177 525.773L443.5 468.547L887 321.906Z" fill="white"/>
                    <path d="M887 321.906H550.535L528.118 355.708L798.331 355.664L887 321.906Z" fill="white"/>
                    <path d="M715.323 847.668L443.5 647.45V468.547L715.323 847.668Z" fill="white"/>
                    <path d="M715.323 847.668L615.177 525.773L577.783 513.09L659.947 770.694L715.323 847.668Z" fill="white"/>
                    <path d="M171.678 847.668L275.4 525.773L443.5 468.547L171.678 847.668Z" fill="white"/>
                    <path d="M171.678 847.671L443.5 647.311V608.672L224.804 767.638L171.678 847.671Z" fill="white"/>
                    <path d="M0 321.906H348.484L443.5 468.547L0 321.906Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_star">
                      <rect width="887" height="847.668" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              
              {/* Текст */}
              <p className="text-white font-extra-condensed uppercase text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl lg:text-fluid-3xl xl:text-fluid-4xl font-bold leading-tight text-center md:text-left md:whitespace-nowrap">
                Голосуй за социалистов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

