import { useState } from 'react';
import { StyledSeriesButton } from './styles';

const SeriesButton = ({ repetitions }: Props): React.ReactElement => {
  const [completed, setCompleted] = useState(false);

  return (
    <StyledSeriesButton
      completed={completed}
      onClick={() => {
        setCompleted(true);
      }}
    >
      {repetitions}
    </StyledSeriesButton>
  );
};

export type Props = {
  repetitions: number;
};

export default SeriesButton;
