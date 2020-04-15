import { RatingToStarsPipe } from './rating-to-stars.pipe';

describe('RatingToStarsPipe', () => {
  it('create an instance', () => {
    const pipe = new RatingToStarsPipe();
    expect(pipe).toBeTruthy();
  });
});
