import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

const FilterImages = ({ setImageArray, images }) => {
  const [filterValue, setFilterValues] = useState<string>('');

  const filterImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValues(e.target.value);
  };

  useEffect(() => {
    const filteredImages = images.filter((image) =>
      image.title.toLowerCase().includes(filterValue.toLocaleLowerCase())
    );

    setImageArray(filteredImages);
  }, [filterValue]);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <FormControl fullWidth sx={{ m: 1 }} variant='standard'>
        <TextField
          label='Filter Photos'
          variant='standard'
          onChange={filterImages}
          value={filterValue}
          sx={{ input: { color: 'grey', fontWeight: 200 } }}
        />
      </FormControl>
    </Box>
  );
};

export default FilterImages;
