import React, { FunctionComponent } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { RootState } from '../../../../../../shared/reducers';
import { connect } from 'react-redux';
import { PlaybookModel } from 'quicko-core/models/Playbook';

type PlaybookFieldProps = {
  playbooks: PlaybookModel[];
  value: string;
  onChange: (value: string) => void;
};

const PlaybookField: FunctionComponent<PlaybookFieldProps> = ({
  playbooks,
  value = '',
  onChange
}) => {
  return (
    <Select value={value} onChange={(event: any) => onChange(event.target.value)}>
      {playbooks.map(playbook => (
        <MenuItem key={playbook.id} value={playbook.id}>
          {playbook.name}
        </MenuItem>
      ))}
    </Select>
  );
};

const mapStateToProps = (state: RootState) => ({
  playbooks: Object.values(state.playbooks)
});

export default connect(mapStateToProps)(PlaybookField);
