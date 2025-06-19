import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import { Cpu, ShieldCheck, LifeBuoy } from 'lucide-react';
import styles from './styles.module.css';
import Layout from '@theme/Layout';




const FeatureList: FeatureItem[] = [
  {
    title: 'Identify',
    image: require('@site/static/img/iconpage/ic1.png').default,
    description: (
      <>
        Thống kê và phân loại các thiết bị trong hệ thống theo mức độ rủi ro.
      </>
    ),
  },
  {
    title: 'Protect',
    image: require('@site/static/img/iconpage/ic2.png').default,
    description: (
      <>
        Ngăn chặn các cuộc tấn công trước khi chúng xảy ra hoặc gây thiệt hại.
      </>
    ),
  },
  {
    title: 'Detect',
    image: require('@site/static/img/iconpage/ic3.png').default,
    description: (
      <>
        Phân tích hành vi, giúp phát hiện kịp thời các hành vi bất thường, tấn công tinh vi hoặc dấu hiệu xâm nhập.
      </>
    ),
  },
    {
    title: 'Respond',
    image: require('@site/static/img/iconpage/ic4.png').default,
    description: (
      <>
        Nhanh chóng phản ứng và xử lý sự cố khi có hành vi tấn công hoặc xâm nhập xảy ra. 
      </>
    ),
  },
   {
    title: 'Recover',
    image: require('@site/static/img/iconpage/ic5.png').default,
    description: (
      <>
        Khôi phục lại hệ thống, dữ liệu và hoạt động bình thường sau sự cố bảo mật.
      </>
    ),
  },
];
type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};
function Feature({title, image, description}: FeatureItem) {
  return (
    <div className="col col--4">
      <div className="text--center">
        <img src={image} alt={title} style={{ width: 100, height: 100 }} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row row--12 text--center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}