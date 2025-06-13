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
        Giao diện thân thiện, dễ sử dụng. Tính năng mạnh mẽ và dễ dàng
      </>
    ),
  },
  {
    title: 'Protect',
    image: require('@site/static/img/iconpage/ic2.png').default,
    description: (
      <>
        EDR dùng để phát hiện và loại bỏ các phần mềm độc hại hoặc bất kỳ hoạt động khả nghi nào khác trên mạng
      </>
    ),
  },
  {
    title: 'Detect',
    image: require('@site/static/img/iconpage/ic3.png').default,
    description: (
      <>
        Chúng tôi luôn sẵn sàng hỗ trợ nếu gặp bất kì trục trặc hay khó khăn nào với phần mềm
      </>
    ),
  },
    {
    title: 'Respond',
    image: require('@site/static/img/iconpage/ic4.png').default,
    description: (
      <>
        Chúng tôi luôn sẵn sàng hỗ trợ nếu gặp bất kì trục trặc hay khó khăn nào với phần mềm
      </>
    ),
  },
   {
    title: 'Recover',
    image: require('@site/static/img/iconpage/ic5.png').default,
    description: (
      <>
        Chúng tôi luôn sẵn sàng hỗ trợ nếu gặp bất kì trục trặc hay khó khăn nào với phần mềm
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}