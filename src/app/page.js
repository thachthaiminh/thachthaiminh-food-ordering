import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader subHeader={"Our story"} mainHeader={"About us"} />
        <div className="max-w-md mx-auto mt-4 text-gray-500 text-justify flex flex-col gap-4">
          <p>
            thachthaiminh Pizza có hơn 10.000 cửa hàng trên toàn thế giới tại
            hơn 74 quốc gia. Chúng tôi mang đến sự hài lòng cho hơn 1 triệu
            khách hàng mỗi ngày, hơn 400 triệu bánh pizza mỗi năm. Trong suốt 50
            năm qua, lời hứa “giao hàng miễn phí trong 30 phút” của chúng tôi đã
            trở thành một quy chuẩn.
          </p>
          <p>
            thachthaiminh Pizza đảm bảo rằng đơn đặt hàng của bạn sẽ đến trong
            vòng 30 phút, hoặc chúng tôi sẽ gửi đến bạn một Voucher miễn phí
            Pizza cỡ vừa cho lần mua tiếp theo!
          </p>
          <p>
            thachthaiminh Pizza đảm bảo bạn sẽ hài lòng! Pizza của bạn luôn được
            đảm bảo nóng giòn và thơm ngon khi được giao đến ngưỡng cửa nhà bạn,
            nếu không chúng tôi sẵn sàng đổi lại cho bạn!
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader subHeader={"Don't heitate"} mainHeader={"Contact us"} />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+84939162523"
          >
            0939 162 523
          </a>
        </div>
      </section>
    </>
  );
}
