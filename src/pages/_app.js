import '../../global.css';  // استيراد الأنماط العامة (يمكنك تعديل المسار حسب حاجتك)
import 'slick-carousel/slick/slick.css'; // استيراد أنماط Slick
import 'slick-carousel/slick/slick-theme.css'; // استيراد الأنماط الثانوية لـ Slick

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
