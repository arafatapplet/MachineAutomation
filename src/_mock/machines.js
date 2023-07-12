import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const MACHINE_NO = [
  'LL01',
  'LL02',
  'LL03',
  'LL04',
  'LL05',
  'LL06',
  'LL07',
];
// const STATUS_COLOR = ['#54D62C', '#FF4842', '#FFC107', '#1890FF', '#637381', '#FFC0CB', '#08e7f1'];
// const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];
// ----------------------------------------------------------------------

const machines = [...Array(7)].map((_, index) => {

    const status = sample(['Started', 'Stop', 'Health Check', 'Interruption', 'Ideal', 'Tape Setting', 'Finish']);
    let brdColor;

    if (status === 'Started') {
    brdColor = '#54D62C';
    } else if (status === 'Stop') {
    brdColor = '#FF4842';
    } else if (status === 'Health Check') {
    brdColor = '#FFC107';
    } else if (status === 'Interruption') {
    brdColor = '#1890FF';
    } else if (status === 'Ideal') {
    brdColor = '#637381';
    } else if (status === 'Tape Setting') {
    brdColor = '#FFC0CB';
    } else if (status === 'Finish') {
    brdColor = '#08e7f1';
    }

  return {
    id: faker.datatype.uuid(),
    machineNo: MACHINE_NO[index],
    start: faker.datatype.number({ min: 4, max: 99 }),
    stop: faker.datatype.number({ min: 4, max: 99}),
    frecuency: faker.datatype.number({ min: 70, max: 99}),
    rpm: faker.datatype.number({ min: 4, max: 99 }),
    counter: faker.datatype.number({ min: 4, max: 99 }),
    status,
    brdColor,
  };
});

export default machines;
