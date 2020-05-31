import React, {useState, useEffect} from 'react';
import {Scrollpicker} from 'beeshell/dist/components/Scrollpicker';
import {BottomModal} from 'beeshell/dist/components/BottomModal';
import {BottomCategoryProps, KindAreaGetResponse} from '@/types';
import {axios} from '@/api';

// eslint-disable-next-line react/display-name
const BottomCategory = React.forwardRef(
  ({setKind}: BottomCategoryProps, ref: any) => {
    const [kindData, setKindData] = useState<KindAreaGetResponse['data']>();
    const [index, setIndex] = useState(2);
    const labelKindData = kindData?.map((v) => {
      return {...v, label: v.kindName};
    });
    useEffect(() => {
      axios
        .get<KindAreaGetResponse>('commodity/kind')
        .then((res) => {
          setKindData(res.data.data);
        })
        .catch(() => {});
    }, []);
    return (
      <BottomModal
        ref={ref}
        title=""
        leftCallback={() => {
          setKind(undefined);
        }}>
        {kindData ? (
          <Scrollpicker
            list={[labelKindData]}
            offsetCount={2}
            value={[index]}
            onChange={(columnIndex: number, rowIndex: number) => {
              setIndex(rowIndex);
              setTimeout(() => {
                setKind(kindData[rowIndex]);
              }, 0);
            }}></Scrollpicker>
        ) : null}
      </BottomModal>
    );
  },
);

export default BottomCategory;
