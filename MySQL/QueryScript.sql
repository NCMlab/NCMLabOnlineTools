SELECT
    b.Name AS Battery,
    c.name AS Component,
    bc.execution_order,
    bc.icon_name,

    -- ✅ Use override if present
    p.Name AS ParameterSet,

    i.WelcomeText

FROM BatteryComponentBridge bc
JOIN Battery b ON bc.battery_id = b.id
JOIN Component c ON bc.component_id = c.id

JOIN Parameters p ON p.id =
    COALESCE(bc.override_parameter_id, bc.parameter_id)

JOIN Instructions i ON i.id =
    COALESCE(bc.override_instruction_id, bc.instruction_id)

WHERE b.shortName = 'weeklyPost147'
ORDER BY bc.execution_order;
