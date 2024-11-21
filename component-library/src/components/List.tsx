import { StyleSheet, Text, View, FlatList } from 'react-native';

interface ItemProps {
  title: string;
}

interface ListProps<T> {
  data: T[];
}

export default function List<T>({ data }: ListProps<T>) {
  function filterData<T>(
    array: any[],
    predicate: (value: T) => boolean
  ): string[] {
    return array.filter(item => predicate(item as T));
  }

  const filteredData = filterData<string>(
    data,
    item => typeof item === 'string'
  );

  const Item = ({ title }: ItemProps) => {
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={filteredData}
      renderItem={({ item }) => <Item title={item} />}
    />
  );
}
