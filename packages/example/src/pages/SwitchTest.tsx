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
}

const mockFetchData = (shouldFail: boolean): Promise<ApiItem[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Simulated fetch failure'));
      } else {
        resolve([
          { id: 1, title: 'Mock Product 1' },
          { id: 2, title: 'Mock Product 2' },
          { id: 3, title: 'Mock Product 3' },
        ]);
      }
    }, 1500);
  });
};

const SwitchWithAPI: React.FC = () => {
  const [controlledChecked, setControlledCheck] = useState<boolean>(false);
  const [data, setData] = useState<ApiItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [switchState, setSwitchState] = useState<TypeSwitchState>('default');
  const [showFailScenario, setShowFailScenario] = useState(false);

  const handleSwitchChange = useCallback(async () => {
    setSwitchState('default');

    // Turn off scenario
    if (controlledChecked || error !== null) {
      setControlledCheck(false);
      setData(null);
      setError(null);
      return;
    }

    setLoading(true);
    setSwitchState('loading');
    setError(null);

    try {
      const responseData = await mockFetchData(showFailScenario);
      setData(responseData);
      setControlledCheck(true);
      setSwitchState('default');
    } catch (err) {
      setData(null);
      setError('Failed to fetch data');
      setSwitchState('failure');
    } finally {
      setLoading(false);
    }
  }, [controlledChecked, showFailScenario, error]);

  const handleFailScenarioCheck = useCallback((checked: boolean) => {
    setShowFailScenario(checked);
    setControlledCheck(false);
    setData(null);
    setError(null);
    setSwitchState('default');
  }, []);

  return (
    <Container>
      <PageHeader title="Switch Component Examples" icon="Settings" />

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
          <Checkbox key='example1' checked={showFailScenario} onChangeCallback={handleFailScenarioCheck} />
        </Label>
        <SwitchWrapper>
          <Switch
            labelText="Fetch Data (Controlled)"
            checked={controlledChecked}
            onChangeCallback={handleSwitchChange}
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
