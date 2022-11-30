import { useState } from 'react'
import MainLayout from '../../common/mainLayout'
import AddFeatureForm from '../../components/features/addFeatureForm'
import FeatureCode from '../../components/features/featureCode'
import TargetAudienceCard from '../../components/features/targetAudienceCard'

export default function AddFeature() {
  const [featureAdded, setFeatureAdded] = useState(true);
  const [targetAudienceShow, setTargetAudienceShow] = useState(true)

  return (
    <MainLayout>
      {featureAdded ?
        <AddFeatureForm clickHandler={() => setFeatureAdded(!featureAdded)} />
        :
        <>{targetAudienceShow ?
          <FeatureCode clickHandler={() => setTargetAudienceShow(!targetAudienceShow)} />
          : <TargetAudienceCard />
        }
        </>
      }
    </MainLayout>
  )
}
