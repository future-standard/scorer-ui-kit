import React, { useCallback, useState } from 'react';
import { Switch, PageHeader, TypeSwitchState, Label, Checkbox } from 'scorer-ui-kit';
import styled from 'styled-components';

const Container = styled.div`
  padding: 50px;
`;

const SwitchWrapper = styled.div`
  margin-top: 30px;
`;

const ExampleWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
`;

const ResponseTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
`;

const ResponseContent = styled.div`
  margin-top: 10px;
`;

interface ApiItem {
  id: number;
  title?: string;
  username?: string;
  [key: string]: any; // For any other properties that might exist
}

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

// Then update the state declaration:
const SwitchWithAPI: React.FC = () => {
  const [controlledChecked, setControlledCheck] = useState<boolean>(false);
  const [data, setData] = useState<ApiItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [switchState, setSwitchState] = useState<TypeSwitchState>('default');
  const [showFailScenario, setShowFailScenario] = useState(false);

  const fetchData = useCallback(async (apiUrl: string) => {
    setLoading(true);
    setSwitchState('loading');
    setError(null);
    await sleep(1500);
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setSwitchState('default');
      const responseData = await response.json();
      setData(responseData);
      setControlledCheck(!controlledChecked);
    } catch (err) {
      setSwitchState('failure');
      setError('Failed to fetch data');
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [controlledChecked, setControlledCheck, setData, setError, setLoading, setSwitchState]);

  const handleSwitchChange = useCallback(async (apiUrl: string) => {
    setSwitchState('default');

    if (controlledChecked || error !== null) { // turn off switch scenario
      setControlledCheck(false);
      setData(null);
      setError(null);
      return;
    }

    await fetchData(apiUrl);
  }, [controlledChecked, error, fetchData, setControlledCheck, setData, setError, setSwitchState]);

  const handleFailScenarioCheck = useCallback((checked: boolean) => {
    setShowFailScenario(checked);
    setControlledCheck(false);
    setData(null);
    setError(null);
    setSwitchState('default');
  }, []);

  return (
    <Container>
      <PageHeader
        title="Switch Component Examples"
        icon="Settings"
      />

      <ExampleWrapper>
        <PageHeader
          title="Uncontrolled Component"
          introductionText="This switch uses defaultChecked prop and manages its own state internally"
        />

        <SwitchWrapper>
          <Switch
            labelText="Toggle Switch (Uncontrolled)"
            defaultChecked={true}
            onChangeCallback={(newValue) => console.log("Uncontrolled switch changed:", newValue)}
          />
        </SwitchWrapper>
      </ExampleWrapper>

      <ExampleWrapper>
        <PageHeader
          title="Controlled Component"
          introductionText="This switch uses checked and onChangeCallback props to control its state"
        />
        <Label labelText='Show Fail Scenario' htmlFor='example1' direction='row'>
          <Checkbox key='example1' checked={showFailScenario} onChangeCallback={handleFailScenarioCheck}></Checkbox>
        </Label>
        <SwitchWrapper>
          <Switch
            labelText="Fetch Data (Controlled)"
            checked={controlledChecked}
            onChangeCallback={() => handleSwitchChange(showFailScenario ? 'badURL' : 'https://fakestoreapi.com/products')}
            state={switchState}
          />
          {loading && <p>Loading...</p>}
          {data && (
            <ResponseContent>
              <ResponseTitle>API Response</ResponseTitle>
              <ul>
                {data.map((item: ApiItem) => (
                  <li key={item.id}>{item.username || item.title}</li>
                ))}
              </ul>
            </ResponseContent>
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </SwitchWrapper>
      </ExampleWrapper>
    </Container>
  );
};

export default SwitchWithAPI;
