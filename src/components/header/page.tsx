import Link from "next/link";

export default function Header() {
  return (
    <>
      <section className="py-4 m-auto h-[54px] w-[1280px] ">
        <ul className="flex gap-3 text-sm font-semibold">
          <Link href={`/`}>
            {" "}
            <li>Прямой эфир</li>
          </Link>
          <Link href={`/`}>
            {" "}
            <li>Работа в Додо</li>
          </Link>
          <Link href={`/`}>
            {" "}
            <li>О нас</li>
          </Link>
          <Link href={`/`}>
            {" "}
            <li>Контакты</li>
          </Link>
        </ul>
      </section>
      <hr className="opacity-50 w-full" />
      <header className="w-[1280px] m-auto pt-[24px] pb-[16px] flex justify-between">
        <div className="flex gap-8">
          <img src="/Logo.png" alt="logo" />

          <div>
            <h1 className="font-medium">
              Доставка пиццы{" "}
              <span className="text-orange-500 font-semibold">Астрахань</span>
            </h1>

            <span className="flex">
              32 мин
              <div>
                <i className="inline-block w-[3px] h-[3px] my-[3px] mx-[6px] rounded-[3px] bg-black"></i>
              </div>
              4.87
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <p className="font-semibold text-sm">Додокоины</p>
          <button className="bg-gray-100 rounded-xl py-1 px-3 text-gray-500 font-semibold text-sm hover:text-gray-700 duration-150">
            Войти
          </button>
        </div>
      </header>
    </>
  );
}
